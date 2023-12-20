import { act, renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "../hooks/useFetch.js";
import axios from "axios";

jest.mock("axios");

describe("useFetch", () => {
    test("should fetch data", async () => {
        const options = {
            url: import.meta.env.VITE_NEWS_API_BASEURL
        };

        const mockData = {
            userId: 1,
            id: 1,
            title: "mocked title",
            body: "mocked body"
        };
        //mock axios
        axios.request(options);
        axios.request.mockResolvedValue({
            data: {
                articles: mockData
            }
        });

        expect(axios.request).toHaveBeenCalledTimes(1);
        expect(axios.request).toHaveBeenCalledWith(options);
        expect(axios.post).toBeUndefined();

        //render custom hook
        const { result } = renderHook(() => useFetch(options, []));

        act(() => {
            expect(result.current.loading).toBeTruthy();
            expect(result.current.news).toEqual([]);
        });

        await waitFor(() => {
            expect(result.current.loading).toBeFalsy();
            expect(result.current).toStrictEqual({
                loading: false,
                error: null,
                news: mockData,
                setNews: result.current.setNews
            });
        });
    });

    test("should catch error", async () => {
        //mock error
        const mockedError = new Error("Oops! error occured.");
        const options = {
            url: import.meta.env.VITE_NEWS_API_BASEURL
        };

        axios.request.mockRejectedValue(mockedError);
        expect(axios.request).toHaveBeenCalledTimes(2);

        const { result } = renderHook(() => useFetch(options, []));
        expect(result.current.loading).toBeTruthy();

        await waitFor(() => {
            expect(result.current).toStrictEqual({
                loading: false,
                news: [],
                error: mockedError.message,
                setNews: result.current.setNews
            });
        });
    });

    test("useFetch performs multiple requests for multiple URLS", async () => {
        //fetch1
        const options1 = {
            url: `${import.meta.env.VITE_NEWS_API_BASEURL}/search`
        };
        const mockData1 = {
            userId: 1,
            id: 1,
            title: "mocked title",
            body: "mocked body"
        };

        await axios.request.mockResolvedValue({
            data: {
                articles: mockData1
            }
        });

        const { result } = renderHook(() => useFetch(options1, []));
        expect(result.current.news).toEqual([]);
        expect(result.current.loading).toBeTruthy();

        await waitFor(() => {
            expect(result.current.news).toEqual(mockData1);
            expect(result.current.loading).toBeFalsy();
        });

        //fetch2
        const options2 = {
            url: `${import.meta.env.VITE_NEWS_API_BASEURL}/latest_headlines`
        };
        const mockData2 = {
            userId: 1,
            id: 1,
            title: "mocked title",
            body: "mocked body"
        };

        await axios.request.mockResolvedValue({
            data: {
                articles: mockData2
            }
        });

        const { result: result2 } = renderHook(() => useFetch(options2, []));
        expect(result2.current.news).toEqual([]);
        expect(result2.current.loading).toBeTruthy();

        await waitFor(() => {
            expect(result2.current.news).toEqual(mockData2);
            expect(result2.current.loading).toBeFalsy();
        });
    });
});
