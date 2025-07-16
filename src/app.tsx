import { useState } from 'preact/hooks'

import './app.css'

import { ErrorBoundary, LocationProvider, Router, Route,  } from 'preact-iso';

import {Home} from '@/features/home/Index'
import {Foo} from '@/features/foo/Index'


export function App() {
  const [count] = useState(0)

  return (
    <>
<div>
  <p>{count}</p>
  	<LocationProvider>
		<ErrorBoundary>
			<Router>
				<Route path="/" component={Home} />
				<Route path="/foo" component={Foo} />
			</Router>
		</ErrorBoundary>
	</LocationProvider>
</div>
    </>
  )
}
