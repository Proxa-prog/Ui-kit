import {describe, expect, test} from "vitest";
import {render, screen} from "@testing-library/react";
import {Button} from "../index";
import "@testing-library/jest-dom";

describe('Button test', () => {
    render(<Button style={{ fontSize: '2px'}}>Button</Button>)

    test("should show button all the time", () => {

        expect(screen.getByText(/Button/i)).toBeInTheDocument();
    })
})