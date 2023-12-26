import {
    act,
    waitFor,
    fireEvent,
    render,
    screen
} from "@testing-library/react";
import { mocks } from "../test-utils";
import AudioComponent from "../components/AudioComponent";
import axios from "axios";

jest.mock("axios");

describe("AudioComponent", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    global.URL.createObjectURL = jest.fn();

    test("should play and pause with fetched audio", async () => {
        const audioUrl = import.meta.env.VITE_VOICE_BASEURL;
        const mockedBody = {
            text: "This is mocked body"
        };

        //mock axios
        axios.post(audioUrl, mockedBody, {
            responseType: "blob"
        });

        axios.post.mockResolvedValue({
            data: URL.createObjectURL(mockedBody)
        });

        expect(axios.post).toHaveBeenCalledTimes(1);
        expect(axios.post).toHaveBeenCalledWith(audioUrl, mockedBody, {
            responseType: "blob"
        });
        expect(window.URL.createObjectURL).toHaveBeenCalled();
        expect(axios.get).toBeUndefined();

        //render Audio Component
        render(<AudioComponent text={mockedBody.text} />);
        const audioBtn = screen.getByTitle(/play to listen news/i);

        await waitFor(() => {
            expect(audioBtn).toBeInTheDocument();
            expect(audioBtn).toHaveClass("audio-btn", { exact: true });
            expect(audioBtn).not.toHaveClass("audioButton");
        });
        // audio plays when click
        fireEvent.click(audioBtn);
        mocks.Audio.play();

        expect(mocks.Audio.play).toHaveBeenCalled();
        expect(mocks.Audio.play).toHaveBeenCalledTimes(1);

        mocks.Audio.play.mockReturnValue({
            data: mockedBody.text
        });

        // if audio reads text or behaves as SpeechRecoginition
        expect(mocks.Audio.play).toHaveReturnedTimes(1);

        //audio pauses when click
        fireEvent.click(audioBtn);
        mocks.Audio.pause();

        expect(mocks.Audio.pause).toHaveBeenCalled();
        expect(mocks.Audio.pause).toHaveBeenCalledTimes(1);

        mocks.Audio.pause.mockReturnValue({
            data: ""
        });

        expect(mocks.Audio.pause).toHaveReturnedTimes(1);
    });

    test("should catch error when there is no audio fetched", async () => {
        const mockedError = new Error("Unable to stream audio.");
        const audioUrl = import.meta.env.VITE_VOICE_BASEURL;
        const mockedBody = {
            text: "This is mocked body"
        };
        const setError = jest.fn();
        const { getByTestId } = render(<AudioComponent />);
        // error handling using try/catch
        try {
            await axios.post(audioUrl, mockedBody, {
                responseType: "blob"
            });
            axios.post.mockRejectedValue(mockedError);
        } catch (e) {
            setError(e.message);
            expect(getByTestId(/error/i)).toBeInTheDocument();
            expect(e.message).toEqual(mockedError.message);
        }

        expect(axios.post).toHaveBeenCalledTimes(1);
        setError(mockedError);
        expect(setError).toHaveBeenCalled();
        expect(setError).toHaveBeenCalledWith(mockedError);
    });
});
