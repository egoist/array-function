import test from 'ava'
import af from './'

test('main', t => {
	const fn = af(['foo', 'bar', 'zoo', {a: 1}])
	t.same(fn.name, 'foo')
	t.same(fn.args, ['bar', 'zoo', {a: 1}])
})
