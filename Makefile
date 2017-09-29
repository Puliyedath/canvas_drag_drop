setup :
	rm "package.json"
	rm -rf node_modules
	npm init -y
	@echo "[Dependencies] Adding project dependencies \n"
	npm install --save-dev browserify
	npm install --save-dev superstatic
	npm link browserify
	@echo "[Structure-Setup] Creating Project Structure \n"
	mkdir -p src/javascript src/styles public
	touch src/main.js

GREEN='\033[0;32'
WHITE='\033[1;37'

#creates the browserify bundle
bundle.js: $(shell find ./src -path ./node_modules -prune -o -type f -name "*.js" -print)
	@echo "[Build-Step]**************** Generating "$@
	browserify -e src/main.js -o public/$@

watch:
	superstatic public &
	while inotifywait -e close_write -r src/; do make bundle.js;	done


