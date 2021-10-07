module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ["**/__tests__/**/*.[t]s?(x)", "**/?(*.)+(spec|test).[t]s?(x)", "**/__tests__/**/*.[j]s?(x)", "**/?(*.)+(spec|test).[j]s?(x)"],
    transform: {
      "^.+\\.(js|jsx)?$": "babel-jest",
      "^.+\\.(ts|tsx)?$": "ts-jest"
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
    moduleDirectories: ["node_modules", "bower_components", "shared"],
    transformIgnorePatterns: ["node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"],
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
        "<rootDir>/__mocks__/fileMock.ts",
      "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.ts"
    }
  };
  