import React, { FC, ReactNode, useCallback } from 'react'
import styled from "styled-components";

const StyledThead = styled.thead`
    color: #cacaca;
    & > tr > th {
        padding: 12px 18px;
        font-weight: 400;
        font-size: 10px;
        line-height: 11.5px;
        text-align: left;
    }
`
const StyledTbody = styled.tbody`
    & > tr {
        background-color: #212121;
        &:nth-of-type(2n) {
        background-color: #1a1a1a;
        height: 45px;
        }

        & > td {
            font-weight: thin;
            padding: 14px 19px;
            font-weight: 400;
            font-size: 12px;
            line-height: 13.8px
        }
    }
`
const Container = styled.table`
    background-color: rgb(49,49,49);
    border-spacing: 0;
    border-radius: 3px;
    font-family: auto;
    color: white;
`

export interface ColumnConfig<C extends unknown> {
    property?: keyof C
    render?: React.ReactNode | ((row: C, index: number) => React.ReactNode)
    header: React.ReactNode | (() => React.ReactNode)
}
interface TableProps<T extends Array<unknown> = Array<unknown>, Item = T extends Array<infer P> ? P : unknown> {
    data: Item[]
    columns: ColumnConfig<Item>[]
}




export function Table<T extends Array<unknown> = Array<unknown>, Item = T extends Array<infer P> ? P : unknown>({ data, columns }: TableProps<T, Item>) {

    const ThContentRender = useCallback((columnConfig: Pick<ColumnConfig<Item>, 'header'>,) => {

        const { header } = columnConfig
        if (header instanceof Function) return header()

        return header
    }, [])

    const TdRender = useCallback((row: Item, index: number) => {

        return columns.map(({ property, render }) => {
            if (render instanceof Function) return <td key={(property || index) as string}>{render(row, index)}</td>
            if (property) {
                return <td key={(property || index) as string}>{row[property] as ReactNode}</td>
            }
        })
    }, [columns])
    return <Container>
        <StyledThead>
            <tr>
                {columns.map((columnConfig, index) => {
                    return <th key={(columnConfig.property || index) as string}>{ThContentRender(columnConfig)}</th>
                })}
            </tr>
        </StyledThead>
        <StyledTbody>
            {data.map((item, index) => {
                return <tr key={index}>
                    {TdRender(item, index)}
                </tr>
            })
            }
        </StyledTbody>
        <tfoot></tfoot>
    </Container>
}