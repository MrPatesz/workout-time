const expect = require("chai").expect;
const getExerciseMW = require("../../../../middleware/exercise/getExerciseMW");

const exerciseId = 13;
const workoutId = 26;
const exercise = { _id: exerciseId };
const dbError = "dbError";

describe("getExercise middleware ", () => {
  it("should set res.locals.exercise with an exercise object from db", (done) => {
    const mw = getExerciseMW({
      ExerciseModel: {
        findOne: (options) => {
          expect(options).to.be.eql({ _id: exerciseId, _workout: workoutId });
          return Promise.resolve(exercise);
        },
      },
    });

    const reqMock = { params: { exerciseId } };
    const resMock = { locals: { workout: { _id: workoutId } } };
    const nextMock = (err) => {
      expect(err).to.be.eql(undefined);
      expect(resMock.locals.exercise).to.be.eql(exercise);
      done();
    };

    mw(reqMock, resMock, nextMock);
  });
  it("should call next with error when there is a db problem", (done) => {
    const mw = getExerciseMW({
      ExerciseModel: {
        findOne: (options) => {
          expect(options).to.be.eql({ _id: exerciseId, _workout: workoutId });
          return Promise.reject(dbError);
        },
      },
    });

    const reqMock = { params: { exerciseId } };
    const resMock = { locals: { workout: { _id: workoutId } } };
    const nextMock = (err) => {
      expect(err).to.be.eql(dbError);
      expect(resMock.locals.exercise).to.be.eql(undefined);
      done();
    };

    mw(reqMock, resMock, nextMock);
  });
  it("should call next when no exercise found in the db", (done) => {
    const mw = getExerciseMW({
      ExerciseModel: {
        findOne: (options) => {
          expect(options).to.be.eql({ _id: exerciseId, _workout: workoutId });
          return Promise.resolve(null);
        },
      },
    });

    const reqMock = { params: { exerciseId } };
    const resMock = { locals: { workout: { _id: workoutId } } };
    const nextMock = (err) => {
      expect(err.message).to.be.eql(
        `Could not find exercise with id: ${exerciseId}`
      );
      expect(resMock.locals.exercise).to.be.eql(undefined);
      done();
    };

    mw(reqMock, resMock, nextMock);
  });
  it("should call next when res.locals.workout is undefined", (done) => {
    const mw = getExerciseMW({ ExerciseModel: {} });

    const reqMock = { params: { exerciseId } };
    const resMock = { locals: {} };
    const nextMock = (err) => {
      expect(err).to.be.eql(undefined);
      expect(resMock.locals.exercise).to.be.eql(undefined);
      done();
    };

    mw(reqMock, resMock, nextMock);
  });
});
