build:
	node-waf build

clean:
	node-waf clean

ifndef only
test: build
	@NODE_PATH=./lib:$NODE_PATH ./node_modules/.bin/expresso test/*.test.js
else
test: build
	@NODE_PATH=./lib:$NODE_PATH ./node_modules/.bin/expresso test/${only}.test.js
endif

.PHONY: build clean test
