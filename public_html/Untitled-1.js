(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1000,
	height: 400,
	fps: 24,
	color: "#000000",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000033").ss(3,1,1).p("AALlsQCQADBnBnQAMAMALANQBOBbAGB5QABALAAAKQAAAbgDAZQgGAmgMAkQgaBGg4A6QgBABgBAAQgCACgBABQgaAbgdAUQgfAVgiAPQhAAZhKAAQgEAAgEAAQgBAAgCAAQgogBgjgJIBVlaIABgFIgJAIIAHgHIgBAAIgHACIAJgFIAAAAIgHgCIAFAAIgHgCIAJABIABABIAAAAIAAAAIAAAAIABAAIAAAAIABABIAAAAIAAABIAAAAIgBABIAAAAIAAABIAAAAIgBgBIAAABIAAAAIAAgCIAAAAIgBAAIABAAIAAgBIAAAAIAAgBIAAAAIABAAIAAABIAAABIAAAAIgBAAIABAAIAAABIgBAAIAAAAIAAABIAAAAIAAAAIAAAAIgCABIAAgBIgBABIhRBFIjCCiQgagegSghQglhDgFhPQgBgOAAgOQAAgXADgWQANh2BVhZQADgDADgDQBshrCWAAQAGAAAFABIgHEDIgCBiIgBAHIAAAAAkIj8ICiCcIBeBYIjEkiAgCgIIACAHIAAABIAAAAIABAAIAAABAgBAAIgBgIAABABIAAAAAABABIABgBIgBAAIAAABIAAAAAABAAIAAABIADAAIAKgBIgKADIACAAIgDAAIgBAAIgBAAIAAABAAAABIAAAAIAAABIAAABIAAAAIAAABIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIAFgHIgEAHIAHgCIgFADIgCABIABABIgBAAIABADIADAHIgFgHIgBgBIAAAAIAAABIgBAEIicFCQg3gbgugvQgLgKgJgLAAAABIABAAAAAAAIAAAAIACgHIBUlYAAAAAIAAAAIAAAAAAAABIAAgBAgBABIAAgBIgHgIIAHAIAAAABIAAAAAAAABIAAAAIgBgBIABAAAgBABIABAAAAAADIAAAAIgCACIABgCAAAADIAAAAAAAAFIAAAAAAAADIAAgBIAAgBIAAABIAAAAgAABACIAAABIAAAAIgBABIAAgBIAAAAAABADIABAAAABADIAAAAIAAABIAAABIACABIgCgBIAAABIAAALIgBgLIgLFoAAAAEIAAABIAAABIAAgBAAAABIAAABAAAACIgBgBAAAADIAAAAAgBADIgCgCIACAAAAAgBIAAABAAEADIgBAAIAJAJIgJgGIECD5AACACIACABAA6gtIgxArIE5imAA6gtIg4AtAgJANIhLA+AABARIgJFdAA9FmIg8lVAjdEdIDUkQAlCCuIE4imIlRBgAhWFkQglgIgigQAgIABIliguAlmAZIFegYAlUh4IFKB3Ikqi5AiFlNICDFFIg9lZAhmhgIBlBgAAEhpIgEBoAFrA0IllgxIFTB7AAOAAIFcgWACflCIiZE7IDXkUADLExIjFkkICEFIAExDCIkli2ID7DyAFcheIlOBeAEZjpIjfC8");
	this.shape.setTransform(-7.9,5.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-32.6,76.4,76.4);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AVfIFQpfu6tJO6IAAAEQsLNFp2txQpgu6tKO6IAA0GQNKncJgO8QJ2NvMLtDIAAgEQNJu8JfO8QKHOGMkuGQDYGgjYGGQmSHElrAAQlqAAlEnEg");
	this.shape.setTransform(279.5,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AWNILQpPuNsvORIAAAEQixCxisBQQn+EAnHmnIgCgBQhCg+g/hPQkimIlJhJQmQhVndIXIgDhCIAAsJQAQjlAOjXQESiOD4AQQHVAaGKHCIACACQAyA7AxBEQFiGnGEAPQCoADCwhfQC4hWDBjSIAAgEQMruLJHOcQJrNoL+tYQAYAuASAvQCKFhi5FMQmHG3lgAAQlcAAk4mtg");
	this.shape_1.setTransform(279.2,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AW6IUQo9thsUNpIAAADQi4CoixA6QoDDMnYlrIgCgBQhDg1hDhIQkwlilThmQmXh5nqIjIgHg7IAAsfIA9mvQEXiDD7AlQHcA/GaGLIACABQA1A0AzA+QFyF4GKAzQCqAQCyhXQDFhJDPjjIAAgEQMNtbIuN8QJRNMLYsrQAWAtARAtQCCFUi0FAQl7GqlXAAQlOAAksmWg");
	this.shape_2.setTransform(278.9,20.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AXoIgQots2r4NAIAAAEQjBCfi0AkQoHCXnpkuIgCgCQhGgshEhBQlAk8lbiDQmfidn4IvIgLg0IAAs1QAxjkAri9QEch5D/A7QHiBkGsFTIACABQA2AsA1A4QGCFLGRBVQCrAcC1hNQDPg8Dhj1IAAgEQLusrIUNdQI2MuKzr9QAVArAQArQB5FIiuE0QlxGdlMAAQlBAAkfl+g");
	this.shape_3.setTransform(278.5,20.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AYWItQocsJrdMXIAAADQjHCWi6APQoLBin6jyIgBgBQhJglhHg5QlPkWlkigQmnjBoEI7IgPgtIAAtLQBBjkA5iwQEhhuECBRQHqCJG8EaIACABQA4AmA3AwQGSEcGYB6QCtApC3hFQDbgvDwkGIAAgEQLPr7H7M9QIcMRKNrQQAUAqAOAqQBxE7ioEoQlmGQlDAAQkyAAkTlng");
	this.shape_4.setTransform(278.2,21.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AZEI7QoLrdrCLvIAAADQjOCNjAgGQoPAtoKi3IgCgBQhLgchJgyQlejwlti9QmvjkoSJHIgSgmIAAtiQBRjjBHijQEnhjEFBmQHxCuHNDjIABAAQA6AeA5ArQGjDsGeCeQCvA2C3g9QDqghD/kYIAAgDQKwrLHiMdQIBLzJnqiQATApAOAoQBoEvijEcQlbGDk5AAQkkAAkGlRg");
	this.shape_5.setTransform(277.9,21.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AZxJLQn6qxqnLHIAAADQjUCDjHgcQoSgHobh7IgBgBQhOgThLgrQltjKl2jbQm2kHogJSIgWgeIAAt4QBijjBViWQErhZEJB8QH4DUHeCqIABABQA8AWA7AkQGyC9GlDFQCxBAC5g0QD2gVEPkpIAAgCQKRqbHJL9QHmLWJCp0QARAnANAmQBgEiieEQQlQF3kvAAQkWAAj6k6g");
	this.shape_6.setTransform(277.6,21.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AafJcQnpqEqMKdIAAADQjbB6jMgxIxCh7IgBAAQhQgMhOgjQl8ikl/j4Qm+krotJeIgagXIAAuOQByjjBkiJQEwhOENCRQH/D5HuBzIACAAQA9AQA9AcQHCCPGsDoQCwBNC+grQEDgJEdk5IAAgCQJzprGwLeQHLK4IcpGQAQAlALAlQBYEViYEEQlFFqkmAAQkHAAjukjg");
	this.shape_7.setTransform(277.2,20.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009900").s().p("AbMJtQnYpapwJ3IAAADQjiBxjRhHQobhxo8gDIgCAAQhSgDhQgcQmMh+mHkVQnGlOo6JqQgPgJgPgIIAAukQCDjiBxh8QE2hDEQCmQIGEfH/A6IABAAQBAAIA+AXQHTBfGyENQCyBZDAgjQEPAEEtlKIAAgCQJUo6GXK+QGwKbH2oZQAPAjALAiQBOELiSD4Qk6FdkcAAQj5AAjikNg");
	this.shape_8.setTransform(276.9,20.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009900").s().p("Ab5KAQnGoupVJPIAAACQjpBojXhdQoeilpOA5IgBAAQhVAFhSgUQmbhYmRkzQnNlypIJ2IghgJIAAu6QCTjjCAhuQE7g5ETC9QINFDIQACIABAAQBCABBAAQQHjAwG2ExQC2BmDCgaQEcARE8lbIAAgCQI1oKF+KeQGVJ9HRnrQANAgAKAiQBGD+iNDsQkvFRkTAAQjrAAjVj2g");
	this.shape_9.setTransform(276.6,20.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009900").s().p("AcnKTQm2oBo6IlIAAADQjvBfjchzQojjapeB1IgCABQhXANhUgOQmqgxmalQQnUmWpWKCQgSgCgTAAIAAvRQCjjhCOhhQFAgvEXDSQIUFpIhg2IABAAQBDgGBCAJQHzABG9FVQC4BzDEgSQEpAeFLlsIAAgCQIWnaFkJ+QF7JgGrm/QAMAgAJAhQA9DxiHDgQklFFkJAAQjcAAjIjgg");
	this.shape_10.setTransform(276.3,19.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009900").s().p("AdUKnQmlnWofH+IAAACQj1BWjiiIQonkPpvCxIgCAAQhZAWhXgGQm5gMmjltQncm5pjKOQgUABgUADIAAvmQCzjiCchTQFGgkEZDnQIbGOIyhuIABAAQBFgOBEADQIDguHEF5QC6CADGgJQE1ArFal+IAAgCQH4mqFLJfQFgJDGFmSQALAfAIAfQA1DliCDUQkbE4j/AAQjNAAi8jJg");
	this.shape_11.setTransform(276.1,19.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009900").s().p("AeBK7QmTmpoEHUIAAACQj8BNjoidQorlEqADtIgBABQhcAehZABQnJAamrmKQnkndpwKaQgWAEgWAHIAAv8QDEjhCqhHQFKgZEeD9QIiGzJCimIABgBQBHgUBGgEQIThdHKGdQC8CMDIAAQFCA5FpmQIAAgCQHZl5EyI/QFFIlFglkQAJAdAHAeQAsDYh8DIQkQEsj3AAQi+AAivizg");
	this.shape_12.setTransform(275.8,19);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009900").s().p("AeuLPQmDl8noGrIAAACQkCBEjuizQoxl4qPEoIgBACQheAmhcAIQnYBBmzmoQnsoAp+KlQgYAIgYALIAAwTQDUjhC5g5QFPgOEhESQIpHYJTjdIABgCQBJgbBHgLQIkiMHRHCQC+CYDKAIQFOBGF4mhIAAgBQG6lJEZIfQErIIE6k3QAIAcAFAcQAkDMh2C8QkGEfjuAAQivAAiiidg");
	this.shape_13.setTransform(275.5,18.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009900").s().p("AfbLkQlylQnNGDIAAACQkJA6jzjIQo1mtqgFkIgBACQhgAuheAQQnoBnm8nFQn0okqLKxQgZAMgaAOIAAwpQDkjhDHgrQFVgEEkEnQIwH+JjkWIABgBQBLgjBJgRQIyi8HaHnQC/CkDMARQFbBUGHmzIAAgBQGckZEAIAQEPHqEVkJQAHAaAEAbQAcC/hxCwQj9ETjlAAQigAAiUiHg");
	this.shape_14.setTransform(275.3,17.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009900").s().p("EAgHAL5QlgkkmyFaIAAACQkQAxj4jeQo6niqxGhIAAACQhjA3hgAXQn3CMnFniQn7pHqZK9QgbAPgcARIAAw+QD0jhDWgeQFZAGEoE+QI3IiJ0lNIABgCQBNgqBLgYQJCjrHgILQDBCxDPAaQFnBgGWnEIAAgBQF9joDnHgQD0HNDvjcQAGAZADAZQATCyhrCkQjzEJjdAAQiQAAiHhyg");
	this.shape_15.setTransform(275.1,17.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009900").s().p("EAgzAMOQlPj4mXEyIAAABQkWApj+j0Qo+oWrBHcIgBACQhlA/hjAeQoFCznPn/QoCprqmLJQgeASgdAVIAAxVQEFjgDjgRQFfARErFTQI+JGKFmEIABgCQBPgxBMgeQJSkaHnIvQDDC+DRAiQFzBuGmnWIAAgBQFei4DNHAQDbGwDJiuQAEAXACAXQALCmhmCYQjqD+jVAAQiAAAh5hdg");
	this.shape_16.setTransform(274.9,16.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009900").s().p("EAhfAMjQk/jMl7EJIAAABQkdAgkDkKQpCpLrTIZIAAACQhoBHhlAmQoVDZnXodQoKqOq0LUQgfAWgfAZIAAxrQEVjgDygEQFkAcEuFoQJFJrKWm7IAAgDQBRg4BPglQJilJHtJTQDFDLDTArQGAB6G1nnIAAAAQE/iJC0GfQDAGUCjiAIAFAsQABCZhgCMQjiDzjNAAQhwAAhphIg");
	this.shape_17.setTransform(274.8,16.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009900").s().p("APRJpQpHp+rjJSIgBADQhpBQhnAsQolD/nfo6QoTqyrBLhQghAZghAdIAAyCQEljfEAAJQFqAmExF+QJMKRKnn0IAAgCQBThABQgsQJzl4H0J4QDGDXDVAzQGNCIHEn4QEghZCcF/QCkF3B+hTQACAVAAAUQgHCMhaCAQlDFZkWikQkuiflgDhIAAABQgVABgUAAQkNAAj2kKg");
	this.shape_18.setTransform(274.7,16.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009900").s().p("AQcJXQpLqyr0KOIAAADQhtBYhpA0QozElnppXQoarWrOLtQgjAcgjAhIAAyYQE2jfEOAWQFuAxE1GUQJTK1K4orIAAgDQBVhHBSgyQKCmnH7KbQDIDkDXA8QGZCVHUoJQEBgoCCFfQCKFZBYglQABATgBASQgPCAhVB0QkoE6kDh7QkchzlFC4IAAABIgYABQkdAAkDkpg");
	this.shape_19.setTransform(274.6,16.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009900").s().p("ARmJGQpPrnsELKIgBADQhuBhhtA7QpCFLnxp0Qoir5rcL4QgkAgglAkIAAyuQFGjfEcAkQFzA7E4GpQJbLbLIpjIAAgDQBXhPBUg4QKSnXICLAQDKDxDZBEQGmCjHiocIAAABQDjAIBpE/QBvE8AzAJIgDAiQgYBzhPBoQkOEbjthSQkLhHkqCQIAAABIgHAAQktAAkRlHg");
	this.shape_20.setTransform(274.6,17.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009900").s().p("ASxI2QpUscsVMGIAAADQhyBphuBDQpSFxn6qSQopsdrpMEQgnAkgnAnIAAzDQFXjfEqAxQF5BGE7G/QJiL/LZqbIAAgDQBYhWBWg/QKjoGIILlQDMD9DbBNQGyCvHyosIAAAAQDEA5BQEfQBUEfANA2IgFAfQghBnhJBcQjzD8jZgpQj6gbkPBnIAAABQk3gGkZlfg");
	this.shape_21.setTransform(274.6,17.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009900").s().p("AT3ImQpXtRsnNCIAAAEQh0BxhwBJQphGYoDqvQoxtBr3MQQgoAngpArIAAzaQFnjeE5A+QF9BRE/HUQJpMlLqrTIAAgEQBahcBWhGQK0o1IPMIQDOEKDdBWQG/C9IBo+IAAAAQClBpA2EAQA6EBgZBkIgHAcQgpBahEBQQjYDdjFAAQjpASjzA+IAAAAQk+gOkfl1g");
	this.shape_22.setTransform(275,18.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009900").s().p("AUwIVQpcuFs3N+IAAAEQh2B5hzBRQpwG+oMrMQo4tksEMbQgrAqgqAvIAAzwQF3jdFHBLQGDBbFCHqQJvNKL7sMIAAgDQBchkBYhMQLEpkIWMsQDPEXDgBeQHLDKIQpQIAAABQCHCZAdDgQAfDkg/CRIgJAaQgyBNg+BEQi+C+iwApQjYA+jYAWQlFgYkkmLg");
	this.shape_23.setTransform(276.8,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-77.8,586.8,193.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AVfIFQpfu6tJO6IAAAEQsLNFp2txQpgu6tKO6IAA0GQNKncJgO8QJ2NvMLtDIAAgEQNJu8JfO8QKHOGMkuGQDYGgjYGGQmSHElrAAQlqAAlEnEg");
	this.shape.setTransform(279.5,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AWNILQpPuNsvORIAAAEQixCxisBQQn+EAnHmnIgCgBQhCg+g/hPQkimIlJhJQmQhVndIXIgDhCIAAsJQAQjlAOjXQESiOD4AQQHVAaGKHCIACACQAyA7AxBEQFiGnGEAPQCoADCwhfQC4hWDBjSIAAgEQMruLJHOcQJrNoL+tYQAYAuASAvQCKFhi5FMQmHG3lgAAQlcAAk4mtg");
	this.shape_1.setTransform(279.2,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AW6IUQo9thsUNpIAAADQi4CoixA6QoDDMnYlrIgCgBQhDg1hDhIQkwlilThmQmXh5nqIjIgHg7IAAsfIA9mvQEXiDD7AlQHcA/GaGLIACABQA1A0AzA+QFyF4GKAzQCqAQCyhXQDFhJDPjjIAAgEQMNtbIuN8QJRNMLYsrQAWAtARAtQCCFUi0FAQl7GqlXAAQlOAAksmWg");
	this.shape_2.setTransform(278.9,20.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AXoIgQots2r4NAIAAAEQjBCfi0AkQoHCXnpkuIgCgCQhGgshEhBQlAk8lbiDQmfidn4IvIgLg0IAAs1QAxjkAri9QEch5D/A7QHiBkGsFTIACABQA2AsA1A4QGCFLGRBVQCrAcC1hNQDPg8Dhj1IAAgEQLusrIUNdQI2MuKzr9QAVArAQArQB5FIiuE0QlxGdlMAAQlBAAkfl+g");
	this.shape_3.setTransform(278.5,20.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AYWItQocsJrdMXIAAADQjHCWi6APQoLBin6jyIgBgBQhJglhHg5QlPkWlkigQmnjBoEI7IgPgtIAAtLQBBjkA5iwQEhhuECBRQHqCJG8EaIACABQA4AmA3AwQGSEcGYB6QCtApC3hFQDbgvDwkGIAAgEQLPr7H7M9QIcMRKNrQQAUAqAOAqQBxE7ioEoQlmGQlDAAQkyAAkTlng");
	this.shape_4.setTransform(278.2,21.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AZEI7QoLrdrCLvIAAADQjOCNjAgGQoPAtoKi3IgCgBQhLgchJgyQlejwlti9QmvjkoSJHIgSgmIAAtiQBRjjBHijQEnhjEFBmQHxCuHNDjIABAAQA6AeA5ArQGjDsGeCeQCvA2C3g9QDqghD/kYIAAgDQKwrLHiMdQIBLzJnqiQATApAOAoQBoEvijEcQlbGDk5AAQkkAAkGlRg");
	this.shape_5.setTransform(277.9,21.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AZxJLQn6qxqnLHIAAADQjUCDjHgcQoSgHobh7IgBgBQhOgThLgrQltjKl2jbQm2kHogJSIgWgeIAAt4QBijjBViWQErhZEJB8QH4DUHeCqIABABQA8AWA7AkQGyC9GlDFQCxBAC5g0QD2gVEPkpIAAgCQKRqbHJL9QHmLWJCp0QARAnANAmQBgEiieEQQlQF3kvAAQkWAAj6k6g");
	this.shape_6.setTransform(277.6,21.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AafJcQnpqEqMKdIAAADQjbB6jMgxIxCh7IgBAAQhQgMhOgjQl8ikl/j4Qm+krotJeIgagXIAAuOQByjjBkiJQEwhOENCRQH/D5HuBzIACAAQA9AQA9AcQHCCPGsDoQCwBNC+grQEDgJEdk5IAAgCQJzprGwLeQHLK4IcpGQAQAlALAlQBYEViYEEQlFFqkmAAQkHAAjukjg");
	this.shape_7.setTransform(277.2,20.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6600").s().p("AbMJtQnYpapwJ3IAAADQjiBxjRhHQobhxo8gDIgCAAQhSgDhQgcQmMh+mHkVQnGlOo6JqQgPgJgPgIIAAukQCDjiBxh8QE2hDEQCmQIGEfH/A6IABAAQBAAIA+AXQHTBfGyENQCyBZDAgjQEPAEEtlKIAAgCQJUo6GXK+QGwKbH2oZQAPAjALAiQBOELiSD4Qk6FdkcAAQj5AAjikNg");
	this.shape_8.setTransform(276.9,20.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("Ab5KAQnGoupVJPIAAACQjpBojXhdQoeilpOA5IgBAAQhVAFhSgUQmbhYmRkzQnNlypIJ2IghgJIAAu6QCTjjCAhuQE7g5ETC9QINFDIQACIABAAQBCABBAAQQHjAwG2ExQC2BmDCgaQEcARE8lbIAAgCQI1oKF+KeQGVJ9HRnrQANAgAKAiQBGD+iNDsQkvFRkTAAQjrAAjVj2g");
	this.shape_9.setTransform(276.6,20.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6600").s().p("AcnKTQm2oBo6IlIAAADQjvBfjchzQojjapeB1IgCABQhXANhUgOQmqgxmalQQnUmWpWKCQgSgCgTAAIAAvRQCjjhCOhhQFAgvEXDSQIUFpIhg2IABAAQBDgGBCAJQHzABG9FVQC4BzDEgSQEpAeFLlsIAAgCQIWnaFkJ+QF7JgGrm/QAMAgAJAhQA9DxiHDgQklFFkJAAQjcAAjIjgg");
	this.shape_10.setTransform(276.3,19.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AdUKnQmlnWofH+IAAACQj1BWjiiIQonkPpvCxIgCAAQhZAWhXgGQm5gMmjltQncm5pjKOQgUABgUADIAAvmQCzjiCchTQFGgkEZDnQIbGOIyhuIABAAQBFgOBEADQIDguHEF5QC6CADGgJQE1ArFal+IAAgCQH4mqFLJfQFgJDGFmSQALAfAIAfQA1DliCDUQkbE4j/AAQjNAAi8jJg");
	this.shape_11.setTransform(276.1,19.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6600").s().p("AeBK7QmTmpoEHUIAAACQj8BNjoidQorlEqADtIgBABQhcAehZABQnJAamrmKQnkndpwKaQgWAEgWAHIAAv8QDEjhCqhHQFKgZEeD9QIiGzJCimIABgBQBHgUBGgEQIThdHKGdQC8CMDIAAQFCA5FpmQIAAgCQHZl5EyI/QFFIlFglkQAJAdAHAeQAsDYh8DIQkQEsj3AAQi+AAivizg");
	this.shape_12.setTransform(275.8,19);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6600").s().p("AeuLPQmDl8noGrIAAACQkCBEjuizQoxl4qPEoIgBACQheAmhcAIQnYBBmzmoQnsoAp+KlQgYAIgYALIAAwTQDUjhC5g5QFPgOEhESQIpHYJTjdIABgCQBJgbBHgLQIkiMHRHCQC+CYDKAIQFOBGF4mhIAAgBQG6lJEZIfQErIIE6k3QAIAcAFAcQAkDMh2C8QkGEfjuAAQivAAiiidg");
	this.shape_13.setTransform(275.5,18.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AfbLkQlylQnNGDIAAACQkJA6jzjIQo1mtqgFkIgBACQhgAuheAQQnoBnm8nFQn0okqLKxQgZAMgaAOIAAwpQDkjhDHgrQFVgEEkEnQIwH+JjkWIABgBQBLgjBJgRQIyi8HaHnQC/CkDMARQFbBUGHmzIAAgBQGckZEAIAQEPHqEVkJQAHAaAEAbQAcC/hxCwQj9ETjlAAQigAAiUiHg");
	this.shape_14.setTransform(275.3,17.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF6600").s().p("EAgHAL5QlgkkmyFaIAAACQkQAxj4jeQo6niqxGhIAAACQhjA3hgAXQn3CMnFniQn7pHqZK9QgbAPgcARIAAw+QD0jhDWgeQFZAGEoE+QI3IiJ0lNIABgCQBNgqBLgYQJCjrHgILQDBCxDPAaQFnBgGWnEIAAgBQF9joDnHgQD0HNDvjcQAGAZADAZQATCyhrCkQjzEJjdAAQiQAAiHhyg");
	this.shape_15.setTransform(275.1,17.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF6600").s().p("EAgzAMOQlPj4mXEyIAAABQkWApj+j0Qo+oWrBHcIgBACQhlA/hjAeQoFCznPn/QoCprqmLJQgeASgdAVIAAxVQEFjgDjgRQFfARErFTQI+JGKFmEIABgCQBPgxBMgeQJSkaHnIvQDDC+DRAiQFzBuGmnWIAAgBQFei4DNHAQDbGwDJiuQAEAXACAXQALCmhmCYQjqD+jVAAQiAAAh5hdg");
	this.shape_16.setTransform(274.9,16.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF6600").s().p("EAhfAMjQk/jMl7EJIAAABQkdAgkDkKQpCpLrTIZIAAACQhoBHhlAmQoVDZnXodQoKqOq0LUQgfAWgfAZIAAxrQEVjgDygEQFkAcEuFoQJFJrKWm7IAAgDQBRg4BPglQJilJHtJTQDFDLDTArQGAB6G1nnIAAAAQE/iJC0GfQDAGUCjiAIAFAsQABCZhgCMQjiDzjNAAQhwAAhphIg");
	this.shape_17.setTransform(274.8,16.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF6600").s().p("APRJpQpHp+rjJSIgBADQhpBQhnAsQolD/nfo6QoTqyrBLhQghAZghAdIAAyCQEljfEAAJQFqAmExF+QJMKRKnn0IAAgCQBThABQgsQJzl4H0J4QDGDXDVAzQGNCIHEn4QEghZCcF/QCkF3B+hTQACAVAAAUQgHCMhaCAQlDFZkWikQkuiflgDhIAAABQgVABgUAAQkNAAj2kKg");
	this.shape_18.setTransform(274.7,16.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF6600").s().p("AQcJXQpLqyr0KOIAAADQhtBYhpA0QozElnppXQoarWrOLtQgjAcgjAhIAAyYQE2jfEOAWQFuAxE1GUQJTK1K4orIAAgDQBVhHBSgyQKCmnH7KbQDIDkDXA8QGZCVHUoJQEBgoCCFfQCKFZBYglQABATgBASQgPCAhVB0QkoE6kDh7QkchzlFC4IAAABIgYABQkdAAkDkpg");
	this.shape_19.setTransform(274.6,16.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF6600").s().p("ARmJGQpPrnsELKIgBADQhuBhhtA7QpCFLnxp0Qoir5rcL4QgkAgglAkIAAyuQFGjfEcAkQFzA7E4GpQJbLbLIpjIAAgDQBXhPBUg4QKSnXICLAQDKDxDZBEQGmCjHiocIAAABQDjAIBpE/QBvE8AzAJIgDAiQgYBzhPBoQkOEbjthSQkLhHkqCQIAAABIgHAAQktAAkRlHg");
	this.shape_20.setTransform(274.6,17.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF6600").s().p("ASxI2QpUscsVMGIAAADQhyBphuBDQpSFxn6qSQopsdrpMEQgnAkgnAnIAAzDQFXjfEqAxQF5BGE7G/QJiL/LZqbIAAgDQBYhWBWg/QKjoGIILlQDMD9DbBNQGyCvHyosIAAAAQDEA5BQEfQBUEfANA2IgFAfQghBnhJBcQjzD8jZgpQj6gbkPBnIAAABQk3gGkZlfg");
	this.shape_21.setTransform(274.6,17.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF6600").s().p("AT3ImQpXtRsnNCIAAAEQh0BxhwBJQphGYoDqvQoxtBr3MQQgoAngpArIAAzaQFnjeE5A+QF9BRE/HUQJpMlLqrTIAAgEQBahcBWhGQK0o1IPMIQDOEKDdBWQG/C9IBo+IAAAAQClBpA2EAQA6EBgZBkIgHAcQgpBahEBQQjYDdjFAAQjpASjzA+IAAAAQk+gOkfl1g");
	this.shape_22.setTransform(275,18.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF6600").s().p("AUwIVQpcuFs3N+IAAAEQh2B5hzBRQpwG+oMrMQo4tksEMbQgrAqgqAvIAAzwQF3jdFHBLQGDBbFCHqQJvNKL7sMIAAgDQBchkBYhMQLEpkIWMsQDPEXDgBeQHLDKIQpQIAAABQCHCZAdDgQAfDkg/CRIgJAaQgyBNg+BEQi+C+iwApQjYA+jYAWQlFgYkkmLg");
	this.shape_23.setTransform(276.8,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-77.8,586.8,193.8);


(lib.Symbol1copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(222.6,59.7,0.752,0.714,0,-23,-28.6,0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.75,scaleY:0.71,skewX:-22.8,x:228.8,y:6.5},13).to({scaleX:0.75,scaleY:0.71,skewX:-23,x:222.6,y:59.7},11).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AVfIFQpfu6tJO6IAAAEQsLNFp2txQpgu6tKO6IAA0GQNKncJgO8QJ2NvMLtDIAAgEQNJu8JfO8QKHOGMkuGQDYGgjYGGQmSHElrAAQlqAAlEnEg");
	this.shape.setTransform(279.5,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AWNILQpPuNsvORIAAAEQixCxisBQQn+EAnHmnIgCgBQhCg+g/hPQkimIlJhJQmQhVndIXIgDhCIAAsJQAQjlAOjXQESiOD4AQQHVAaGKHCIACACQAyA7AxBEQFiGnGEAPQCoADCwhfQC4hWDBjSIAAgEQMruLJHOcQJrNoL+tYQAYAuASAvQCKFhi5FMQmHG3lgAAQlcAAk4mtg");
	this.shape_1.setTransform(279.2,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AW6IUQo9thsUNpIAAADQi4CoixA6QoDDMnYlrIgCgBQhDg1hDhIQkwlilThmQmXh5nqIjIgHg7IAAsfIA9mvQEXiDD7AlQHcA/GaGLIACABQA1A0AzA+QFyF4GKAzQCqAQCyhXQDFhJDPjjIAAgEQMNtbIuN8QJRNMLYsrQAWAtARAtQCCFUi0FAQl7GqlXAAQlOAAksmWg");
	this.shape_2.setTransform(278.9,20.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AXoIgQots2r4NAIAAAEQjBCfi0AkQoHCXnpkuIgCgCQhGgshEhBQlAk8lbiDQmfidn4IvIgLg0IAAs1QAxjkAri9QEch5D/A7QHiBkGsFTIACABQA2AsA1A4QGCFLGRBVQCrAcC1hNQDPg8Dhj1IAAgEQLusrIUNdQI2MuKzr9QAVArAQArQB5FIiuE0QlxGdlMAAQlBAAkfl+g");
	this.shape_3.setTransform(278.5,20.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AYWItQocsJrdMXIAAADQjHCWi6APQoLBin6jyIgBgBQhJglhHg5QlPkWlkigQmnjBoEI7IgPgtIAAtLQBBjkA5iwQEhhuECBRQHqCJG8EaIACABQA4AmA3AwQGSEcGYB6QCtApC3hFQDbgvDwkGIAAgEQLPr7H7M9QIcMRKNrQQAUAqAOAqQBxE7ioEoQlmGQlDAAQkyAAkTlng");
	this.shape_4.setTransform(278.2,21.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AZEI7QoLrdrCLvIAAADQjOCNjAgGQoPAtoKi3IgCgBQhLgchJgyQlejwlti9QmvjkoSJHIgSgmIAAtiQBRjjBHijQEnhjEFBmQHxCuHNDjIABAAQA6AeA5ArQGjDsGeCeQCvA2C3g9QDqghD/kYIAAgDQKwrLHiMdQIBLzJnqiQATApAOAoQBoEvijEcQlbGDk5AAQkkAAkGlRg");
	this.shape_5.setTransform(277.9,21.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AZxJLQn6qxqnLHIAAADQjUCDjHgcQoSgHobh7IgBgBQhOgThLgrQltjKl2jbQm2kHogJSIgWgeIAAt4QBijjBViWQErhZEJB8QH4DUHeCqIABABQA8AWA7AkQGyC9GlDFQCxBAC5g0QD2gVEPkpIAAgCQKRqbHJL9QHmLWJCp0QARAnANAmQBgEiieEQQlQF3kvAAQkWAAj6k6g");
	this.shape_6.setTransform(277.6,21.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AafJcQnpqEqMKdIAAADQjbB6jMgxIxCh7IgBAAQhQgMhOgjQl8ikl/j4Qm+krotJeIgagXIAAuOQByjjBkiJQEwhOENCRQH/D5HuBzIACAAQA9AQA9AcQHCCPGsDoQCwBNC+grQEDgJEdk5IAAgCQJzprGwLeQHLK4IcpGQAQAlALAlQBYEViYEEQlFFqkmAAQkHAAjukjg");
	this.shape_7.setTransform(277.2,20.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AbMJtQnYpapwJ3IAAADQjiBxjRhHQobhxo8gDIgCAAQhSgDhQgcQmMh+mHkVQnGlOo6JqQgPgJgPgIIAAukQCDjiBxh8QE2hDEQCmQIGEfH/A6IABAAQBAAIA+AXQHTBfGyENQCyBZDAgjQEPAEEtlKIAAgCQJUo6GXK+QGwKbH2oZQAPAjALAiQBOELiSD4Qk6FdkcAAQj5AAjikNg");
	this.shape_8.setTransform(276.9,20.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ab5KAQnGoupVJPIAAACQjpBojXhdQoeilpOA5IgBAAQhVAFhSgUQmbhYmRkzQnNlypIJ2IghgJIAAu6QCTjjCAhuQE7g5ETC9QINFDIQACIABAAQBCABBAAQQHjAwG2ExQC2BmDCgaQEcARE8lbIAAgCQI1oKF+KeQGVJ9HRnrQANAgAKAiQBGD+iNDsQkvFRkTAAQjrAAjVj2g");
	this.shape_9.setTransform(276.6,20.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AcnKTQm2oBo6IlIAAADQjvBfjchzQojjapeB1IgCABQhXANhUgOQmqgxmalQQnUmWpWKCQgSgCgTAAIAAvRQCjjhCOhhQFAgvEXDSQIUFpIhg2IABAAQBDgGBCAJQHzABG9FVQC4BzDEgSQEpAeFLlsIAAgCQIWnaFkJ+QF7JgGrm/QAMAgAJAhQA9DxiHDgQklFFkJAAQjcAAjIjgg");
	this.shape_10.setTransform(276.3,19.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AdUKnQmlnWofH+IAAACQj1BWjiiIQonkPpvCxIgCAAQhZAWhXgGQm5gMmjltQncm5pjKOQgUABgUADIAAvmQCzjiCchTQFGgkEZDnQIbGOIyhuIABAAQBFgOBEADQIDguHEF5QC6CADGgJQE1ArFal+IAAgCQH4mqFLJfQFgJDGFmSQALAfAIAfQA1DliCDUQkbE4j/AAQjNAAi8jJg");
	this.shape_11.setTransform(276.1,19.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AeBK7QmTmpoEHUIAAACQj8BNjoidQorlEqADtIgBABQhcAehZABQnJAamrmKQnkndpwKaQgWAEgWAHIAAv8QDEjhCqhHQFKgZEeD9QIiGzJCimIABgBQBHgUBGgEQIThdHKGdQC8CMDIAAQFCA5FpmQIAAgCQHZl5EyI/QFFIlFglkQAJAdAHAeQAsDYh8DIQkQEsj3AAQi+AAivizg");
	this.shape_12.setTransform(275.8,19);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AeuLPQmDl8noGrIAAACQkCBEjuizQoxl4qPEoIgBACQheAmhcAIQnYBBmzmoQnsoAp+KlQgYAIgYALIAAwTQDUjhC5g5QFPgOEhESQIpHYJTjdIABgCQBJgbBHgLQIkiMHRHCQC+CYDKAIQFOBGF4mhIAAgBQG6lJEZIfQErIIE6k3QAIAcAFAcQAkDMh2C8QkGEfjuAAQivAAiiidg");
	this.shape_13.setTransform(275.5,18.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AfbLkQlylQnNGDIAAACQkJA6jzjIQo1mtqgFkIgBACQhgAuheAQQnoBnm8nFQn0okqLKxQgZAMgaAOIAAwpQDkjhDHgrQFVgEEkEnQIwH+JjkWIABgBQBLgjBJgRQIyi8HaHnQC/CkDMARQFbBUGHmzIAAgBQGckZEAIAQEPHqEVkJQAHAaAEAbQAcC/hxCwQj9ETjlAAQigAAiUiHg");
	this.shape_14.setTransform(275.3,17.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("EAgHAL5QlgkkmyFaIAAACQkQAxj4jeQo6niqxGhIAAACQhjA3hgAXQn3CMnFniQn7pHqZK9QgbAPgcARIAAw+QD0jhDWgeQFZAGEoE+QI3IiJ0lNIABgCQBNgqBLgYQJCjrHgILQDBCxDPAaQFnBgGWnEIAAgBQF9joDnHgQD0HNDvjcQAGAZADAZQATCyhrCkQjzEJjdAAQiQAAiHhyg");
	this.shape_15.setTransform(275.1,17.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("EAgzAMOQlPj4mXEyIAAABQkWApj+j0Qo+oWrBHcIgBACQhlA/hjAeQoFCznPn/QoCprqmLJQgeASgdAVIAAxVQEFjgDjgRQFfARErFTQI+JGKFmEIABgCQBPgxBMgeQJSkaHnIvQDDC+DRAiQFzBuGmnWIAAgBQFei4DNHAQDbGwDJiuQAEAXACAXQALCmhmCYQjqD+jVAAQiAAAh5hdg");
	this.shape_16.setTransform(274.9,16.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("EAhfAMjQk/jMl7EJIAAABQkdAgkDkKQpCpLrTIZIAAACQhoBHhlAmQoVDZnXodQoKqOq0LUQgfAWgfAZIAAxrQEVjgDygEQFkAcEuFoQJFJrKWm7IAAgDQBRg4BPglQJilJHtJTQDFDLDTArQGAB6G1nnIAAAAQE/iJC0GfQDAGUCjiAIAFAsQABCZhgCMQjiDzjNAAQhwAAhphIg");
	this.shape_17.setTransform(274.8,16.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("APRJpQpHp+rjJSIgBADQhpBQhnAsQolD/nfo6QoTqyrBLhQghAZghAdIAAyCQEljfEAAJQFqAmExF+QJMKRKnn0IAAgCQBThABQgsQJzl4H0J4QDGDXDVAzQGNCIHEn4QEghZCcF/QCkF3B+hTQACAVAAAUQgHCMhaCAQlDFZkWikQkuiflgDhIAAABQgVABgUAAQkNAAj2kKg");
	this.shape_18.setTransform(274.7,16.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AQcJXQpLqyr0KOIAAADQhtBYhpA0QozElnppXQoarWrOLtQgjAcgjAhIAAyYQE2jfEOAWQFuAxE1GUQJTK1K4orIAAgDQBVhHBSgyQKCmnH7KbQDIDkDXA8QGZCVHUoJQEBgoCCFfQCKFZBYglQABATgBASQgPCAhVB0QkoE6kDh7QkchzlFC4IAAABIgYABQkdAAkDkpg");
	this.shape_19.setTransform(274.6,16.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ARmJGQpPrnsELKIgBADQhuBhhtA7QpCFLnxp0Qoir5rcL4QgkAgglAkIAAyuQFGjfEcAkQFzA7E4GpQJbLbLIpjIAAgDQBXhPBUg4QKSnXICLAQDKDxDZBEQGmCjHiocIAAABQDjAIBpE/QBvE8AzAJIgDAiQgYBzhPBoQkOEbjthSQkLhHkqCQIAAABIgHAAQktAAkRlHg");
	this.shape_20.setTransform(274.6,17.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ASxI2QpUscsVMGIAAADQhyBphuBDQpSFxn6qSQopsdrpMEQgnAkgnAnIAAzDQFXjfEqAxQF5BGE7G/QJiL/LZqbIAAgDQBYhWBWg/QKjoGIILlQDMD9DbBNQGyCvHyosIAAAAQDEA5BQEfQBUEfANA2IgFAfQghBnhJBcQjzD8jZgpQj6gbkPBnIAAABQk3gGkZlfg");
	this.shape_21.setTransform(274.6,17.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AT3ImQpXtRsnNCIAAAEQh0BxhwBJQphGYoDqvQoxtBr3MQQgoAngpArIAAzaQFnjeE5A+QF9BRE/HUQJpMlLqrTIAAgEQBahcBWhGQK0o1IPMIQDOEKDdBWQG/C9IBo+IAAAAQClBpA2EAQA6EBgZBkIgHAcQgpBahEBQQjYDdjFAAQjpASjzA+IAAAAQk+gOkfl1g");
	this.shape_22.setTransform(275,18.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AUwIVQpcuFs3N+IAAAEQh2B5hzBRQpwG+oMrMQo4tksEMbQgrAqgqAvIAAzwQF3jdFHBLQGDBbFCHqQJvNKL7sMIAAgDQBchkBYhMQLEpkIWMsQDPEXDgBeQHLDKIQpQIAAABQCHCZAdDgQAfDkg/CRIgJAaQgyBNg+BEQi+C+iwApQjYA+jYAWQlFgYkkmLg");
	this.shape_23.setTransform(276.8,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-77.8,586.8,193.8);


// stage content:



(lib.Untitled1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAbGAlCQiihagZgfMg/mAAAMAAAhEvMA+CAAAIAhgkQDojxFHAAQFHAAA8EFQA8EFADEqQACEqDNCgIAVAWQDoDxAAFTQAAExi7DhQC7DfAAExQAAFUjoDwIgdAeIAdAdQDoDxAAFTQAAFUikCRQikCRlqAyQiBAShoAAQi7AAhpg6g");
	mask.setTransform(294.9,220.8);

	// Layer 7
	this.instance = new lib.Symbol1copy3("synched",0);
	this.instance.setTransform(363,178,1,1,0,0,0,279.5,19.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200));

	// Layer 4
	this.instance_1 = new lib.Symbol1copy("synched",0);
	this.instance_1.setTransform(363,239.3,1,1,0,0,0,279.5,19.1);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(200));

	// Layer 1 copy 2
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.setTransform(363,112.9,1,1,0,0,0,279.5,19.1);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(569.6,216,520.4,320.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;