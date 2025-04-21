describe("E2E test for the Quiz app", () => {
  it("should have the Start Quiz button on the landing page", () => {
    cy.visit("http://127.0.0.1:3001/");

    cy.get("button").should("contain.text", "Start Quiz");
  });

  it("should display first question after clicking Start Quiz", () => {
    cy.visit("http://127.0.0.1:3001/");

    cy.intercept(
      {
        method: "GET",
        url: "http://127.0.0.1:3001/api/questions/random",
      },
      {
        fixture: "questions.json",
        statusCode: 200,
      }
    );

    cy.get("button").click();

    cy.get("h2").should("contain.text", "What is the output of print(2 ** 3)?");
  });

  it("should show 2nd question after answering the first question", () => {
    cy.visit("http://127.0.0.1:3001/");
    cy.intercept(
      {
        method: "GET",
        url: "http://127.0.0.1:3001/api/questions/random",
      },
      {
        fixture: "questions.json",
        statusCode: 200,
      }
    );

    //   clicking the start quiz button
    cy.get("button").click();

    //   selecting the first answer
    cy.get("button").eq(0).click();

    // check if 2nd question appears
    cy.get("h2").should(
      "contain.text",
      "Which of the following is a mutable data type in Python?"
    );
  });
});
