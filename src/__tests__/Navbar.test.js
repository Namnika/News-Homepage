import { render, cleanup } from "@testing-library/react";
import logoUrl from "../assets/images/logo.svg";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

describe("Navbar", () => {
    afterEach(() => cleanup());

    describe("SvgLogo should be visible as img src and React Component", () => {
        test("Renders svg as img src", () => {
            const { container } = render(<img src={logoUrl} />);
            const img = container.querySelector("img");
            expect(img).toBeInTheDocument();
        });

        test("Renders svg as React Component", () => {
            const label = "svg-label";
            const { getByLabelText } = render(<Logo aria-label={label} />);

            expect(getByLabelText(label)).toBeInTheDocument();
        });
    });
});
