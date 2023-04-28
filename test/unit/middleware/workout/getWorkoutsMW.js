const expect = require("chai").expect;
const getWorkoutsMW = require("../../../../middleware/workout/getWorkoutsMW");

const workouts = [{_id: 26}, {_id: 52}];
const dbError = "dbError";

describe("getWorkouts middleware ", () => {
  it("should set res.locals.workouts with a workout objects array from db", (done) => {
    const mw = getWorkoutsMW({
      WorkoutModel: {
        find: (options) => {
          expect(options).to.be.eql({});
          return Promise.resolve(workouts);
        },
      },
    });

    const reqMock = undefined;
    const resMock = { locals: {} };
    const nextMock = (err) => {
      expect(err).to.be.eql(undefined);
      expect(resMock.locals.workouts).to.be.eql(workouts);
      done();
    };

    mw(reqMock, resMock, nextMock);
  });
  it("should call next with error when there is a db problem", (done) => {
    const mw = getWorkoutsMW({
      WorkoutModel: {
        find: (options) => {
          expect(options).to.be.eql({});
          return Promise.reject(dbError);
        },
      },
    });

    const reqMock = undefined;
    const resMock = { locals: {} };
    const nextMock = (err) => {
      expect(err).to.be.eql(dbError);
      expect(resMock.locals.workouts).to.be.eql(undefined);
      done();
    };

    mw(reqMock, resMock, nextMock);
  });
});
