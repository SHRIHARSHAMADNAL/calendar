import React from 'react';
import { render } from '@testing-library/react';
import { Calendar } from '../components/Calendar/Calendar';

describe('Calendar', () => {
    test('Check Date Color', () => {
        const date = '01-06-2023';
        const { getByText } = render(<Calendar date={date} />);
        expect(getByText("1")).toHaveStyle(`color: blue`);
    });
    test('Check Date Color', () => {
        const date = '10-06-2023';
        const { getByText } = render(<Calendar date={date} />);
        expect(getByText("10")).toHaveStyle(`color: blue`);
    });
    test('Check Month and Year', () => {
        const date = '01-05-2023';
        const { getByText } = render(<Calendar date={date} />);
        const monthYearText = getByText('May 2023');
        expect(monthYearText).toBeInTheDocument();
    });
    test('Check Month and Year', () => {
        const date = '02-05-2023';
        const { getByText } = render(<Calendar date={date} />);
        const monthYearText = getByText('May 2023');
        expect(monthYearText).toBeInTheDocument();
    });
    test('Check Month and Year', () => {
        const date = '01-05-2022';
        const { getByText } = render(<Calendar date={date} />);
        const monthYearText = getByText('May 2022');
        expect(monthYearText).toBeInTheDocument();
    });
    test('Check Month and Year', () => {
        const date = '01-06-2023';
        const { getByText } = render(<Calendar date={date} />);
        const monthYearText = getByText('June 2023');
        expect(monthYearText).toBeInTheDocument();
    });
    test('Number of days in a month', () => {
        const date = '01-06-2023';
        const { getAllByRole } = render(<Calendar date={date} />);
        const dateCells = getAllByRole('cell');
        expect(dateCells.length).toBe(34); // Note this count also includes the empty cell days(Days of previous month shown as empty) on the calendar in the beginning of month
    });

    test('Number of days in a month', () => {
        const date = '01-02-2023';
        const { getAllByRole } = render(<Calendar date={date} />);
        const dateCells = getAllByRole('cell');
        expect(dateCells.length).toBe(31); // Note this count also includes the empty cell days(Days of previous month shown as empty) on the calendar in the beginning of month
    });
});