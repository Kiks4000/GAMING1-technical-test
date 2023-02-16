import request from "supertest";
import { expect } from "chai";
import { describe, it } from "mocha";
import app from "../server/server";

describe("Leaderboard API", () => {
  it("should return the leaderboard", (done) => {
    request(app)
      .get("/leaderboard/getLeaderboard")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });

  it("should add an entry to the leaderboard", (done) => {
    request(app)
      .post("/leaderboard/postLeaderboard")
      .send({ name: "Test Player", score: 100 })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("array");

        const entry = res.body.find(
          (entry: any) => entry.name === "Test Player"
        );
        expect(entry).to.exist;
        expect(entry.score).to.equal(100);
        done();
      });
  });

  it("should return an error if the name or score is missing", (done) => {
    request(app)
      .post("/leaderboard/postLeaderboard")
      .send({ name: "Test Player" })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.text).to.equal("Missing name or score in request body");
        done();
      });
  });
});

after(() => {
  process.exit();
});
