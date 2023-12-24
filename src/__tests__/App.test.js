import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
import { createHashHistory } from "history";
import App from "../App";
import { MemoryRouter, BrowserRouter as Router } from "react-router-dom";

describe("App", () => {
    afterEach(() => cleanup());

    test("should navigate correctly using hash routing", async () => {
        const history = createHashHistory({ intialEntries: ["/"] });
        history.push("/trending");

        const { getByText, getByTestId } = render(
            <Router>
                <App />
            </Router>
        );
        const trendingNavLink = getByText(/Trending/i);

        expect(trendingNavLink).toBeInTheDocument();

        fireEvent.click(trendingNavLink);

        await waitFor(() => {
            expect(getByTestId(/trending-new/i)).toHaveTextContent(/new$/i);
        });
    });

    test("should render page not found when no match route", () => {
        const badRoute = "/bad/route";

        const { getByText } = render(
            <MemoryRouter initialEntries={[badRoute]}>
                <App />
            </MemoryRouter>
        );

        expect(getByText(/page that doesn't exist./i)).toBeInTheDocument();
    });
});
