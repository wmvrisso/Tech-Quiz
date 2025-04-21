import Quiz from "../../client/src/components/Quiz.jsx";

describe("Component test for the Quiz app", () => {
  it("should have the Start Quiz button on the landing page", () => {
    cy.mount(<Quiz />);

    cy.get("button").should("contain.text", "Start Quiz");
  });

  it("should display first question after clicking Start Quiz", () => {
    cy.mount(<Quiz />);

    cy.intercept(
      {
        method: "GET",
        url: "/api/questions/random",
      },
      {
        fixture: "questions.json",
        statusCode: 200,
      }
    );

    cy.get("button").click();

    cy.get("h2").should("contain.text", "What is the output of print(2 ** 3)?");
  });
});
