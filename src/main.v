module main

import veb
import siguici.vite { Vite }

pub struct Context {
	veb.Context
}

pub struct App {
	veb.StaticHandler
	veb.Middleware[Context]
mut:
	vite Vite
}

pub fn App.new() App {
	return App{
		vite: Vite.new()
	}
}

pub fn new_app() App {
	return App.new()
}

pub fn (mut ctx Context) not_found() veb.Result {
	ctx.res.set_status(.not_found)
	return ctx.html('<h1>Page not found!</h1>')
}

pub fn (app App) before_request(ctx Context) {
	println('[v-vite] before_request: ${ctx.req.method} ${ctx.req.url}')
}

const port = 8082

fn main() {
	mut app := new_app()

	app.handle_static('public', true)!
	app.serve_static('/favicon.ico', 'src/resources/favicon.ico')!

	veb.run[App, Context](mut app, 8080)
}

pub fn (mut app App) index(mut ctx Context) veb.Result {
	title := 'V + Vite'

	return $veb.html()
}
