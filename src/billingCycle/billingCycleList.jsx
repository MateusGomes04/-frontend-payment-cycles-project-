import React, {Component} from "react";

class BillingCycleList extends Component {

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => ({list: state.BillingCycle.list})
export default BillingCycleList
