import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>saídas</p>
                    <img src={outcomeImg} alt="saídas"/>
                </header>
                <strong>R$ 500,00</strong>
            </div>
            <div className="highlight-bg">
                <header>
                    <p>Entradas</p>
                    <img src={totalImg} alt="total"/>
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    )
};