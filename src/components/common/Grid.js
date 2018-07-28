import React from "react";
import PropTypes from 'prop-types'


import BootstrapTable from 'react-bootstrap-table-next';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';



class Grid extends React.Component {

    constructor() {
        super();
        //const selectedRows = [];        

        this.state = {
            selectedRows : []
        };
      }  

    
    render() {

       let selectedRows=this.state.selectedRows;
        const selectRow = {
            mode: 'checkbox',
            clickToSelect: true, 
            hideSelectColumn: true,
            bgColor: '#00BFFF',           
            onSelect: (row, isSelect, rowIndex, e) => {
                console.log(row.id);
                console.log(isSelect);
                console.log(rowIndex);
                console.log(e);                
                if(isSelect)
                    selectedRows.push(rowIndex);                
                else
                    selectedRows=selectedRows.filter(item => item !== rowIndex);                                
                
                //this.setState ({ selectedRows:selectedRows });
                this.state.selectedRows=selectedRows;
                console.log(this.state);
              },
              onSelectAll: (isSelect, rows, e) => {
                console.log(isSelect);
                console.log(rows);
                console.log(e);
              }
        };

        return (
            <div>
                {/* <ReactTable
                    data={this.props.data}
                    columns={this.props.columns}
                    defaultPageSize={10}
                    className="-striped -highlight"                                        
                /> */}

                <BootstrapTable keyField='id' data={this.props.data} columns={this.props.columns}
                    selectRow={selectRow} />
                <br />
            </div>
        );
    }
}

Grid.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
    selectedRows : PropTypes.array
};

export default Grid;
