import test from 'ava'
import af from './'

const fns = {
	foo(bar, zoo, more) {
		console.log(bar, zoo, more)
	}
}

test('main', t => {
	const fn = af(['foo', 'bar', 'zoo', {a: 1}])
	fn(fns)
	t.pass()
})
