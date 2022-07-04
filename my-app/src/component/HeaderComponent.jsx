import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <section class="hero is-normal is-primary">
                        <div class="hero-body is-fullwidth">
                            <p class="title">
                            CRUD APP
                            </p>
                            <p class="subtitle">
                            Tienda-Almacen
                            </p>
                        </div>
                    </section>
                </header>
            </div>
        )
    }
}

export default HeaderComponent