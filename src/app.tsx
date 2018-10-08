import * as React from 'react';
import { Header } from './components/header';

export interface Props { }
export interface State { }

export class App extends React.Component<Props, State>
{
    render()
    {
            return (
                <Header />
            );
    }
}

