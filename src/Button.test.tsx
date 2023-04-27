import {describe, expect, test} from "vitest";
import {render, screen} from "@testing-library/react";
import {Button} from "./index";
import "@testing-library/jest-dom";

describe('Button test', () => {
    render(<Button>Button</Button>)

    test("should show title all the time", () => {

        expect(screen.getByText(/Button/i)).toBeInTheDocument();
    })
})