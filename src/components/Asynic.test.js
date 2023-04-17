import { render, screen } from "@testing-library/react";
import Async from "./Asynic";
describe("Asynic component", () => {
  test("renders posts if request succeeds", async () => {
    render(<Async />);

    const listItemElement = await screen.findAllByRole("listitem");
    expect(listItemElement).not.toHaveLength(0);
  });
});