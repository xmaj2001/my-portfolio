
all:
	echo "Usage: make [target]"

install:
	npm install

dev:
	npm run dev

start:
	npm run start

build:
	npm run build

lint:
	npm run lint .

check:
	npm run check ./

format:
	npm run format -- --write 

clean:
	rm -rf dist node_modules

fclean: clean
	rm -rf .next

re:fclean: fclean
	npm install
