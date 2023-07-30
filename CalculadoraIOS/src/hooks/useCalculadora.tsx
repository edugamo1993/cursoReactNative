import {useRef, useState} from 'react';

enum Operadores {
  emtpy,
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [numeroAnterior, setnumeroAnterior] = useState('0');
  const [numero, setnumero] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setnumero('0');
    setnumeroAnterior('0');
  };

  const addNumber = (n: string) => {
    if (n === '.' && numero.includes('.')) {
      return;
    }

    if (numero === '0') {
      if (n === '.') {
        setnumero(numero + n);
        return;
      }
      if (n !== '0') {
        setnumero(n);
      }
      return;
    }

    setnumero(numero + n);
  };

  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) {
      setnumeroAnterior(numero.slice(0, -1));
    } else {
      setnumeroAnterior(numero);
    }
    setnumero('0');
  };

  const delLastEntry = () => {
    const l = numero.length;
    if (l <= 1 || (l <= 2 && numero.includes('-'))) {
      setnumero('0');
      return;
    }
    setnumero(numero.substring(0, l - 1));
  };

  const positivoNegativo = () => {
    if (numero === '0') {
      return;
    }
    if (numero.includes('-')) {
      setnumero(numero.replace('-', ''));
      return;
    }
    setnumero('-' + numero);
  };

  const botonDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };
  const botonMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };
  const botonRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };

  const botonSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };

  const doOperation = () => {
    const n1 = Number(numero);
    const n2 = Number(numeroAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setnumero(`${n2 + n1}`);
        break;
      case Operadores.restar:
        setnumero(`${n2 - n1}`);
        break;
      case Operadores.multiplicar:
        setnumero(`${n2 * n1}`);
        break;
      case Operadores.dividir:
        if (n1 == 0) {
          setnumero('Err');
          ultimaOperacion.current = Operadores.emtpy;
          break;
        }
        setnumero(`${n2 / n1}`);
        break;
      default:
        break;
    }
    setnumeroAnterior(`${n1}`);
  };

  return {
    numero,
    numeroAnterior,
    addNumber,
    botonDividir,
    botonMultiplicar,
    botonRestar,
    botonSumar,
    limpiar,
    positivoNegativo,
    delLastEntry,
    doOperation,
  };
};
