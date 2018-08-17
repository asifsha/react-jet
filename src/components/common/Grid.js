import React from "react";
import PropTypes from 'prop-types'


import BootstrapTable from 'react-bootstrap-table-next';


import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';



class Grid extends React.Component {

    constructor() {
        super();             
        this.state = {
            selectedRows : []
        };
      }  

    
    render() {

        let selectedRows=this.state.selectedRows;
        const selectRow = {
            mode: 'checkbox',
            clickToSelect: true, 
            hideSelectColumn: false,
            bgColor: '#00BFFF',           
            onSelect: (row, isSelect, rowIndex, e) => {
                console.log(row.id);
                console.log(isSelect);
                console.log(rowIndex);
                console.log(e);                
                if(isSelect)
                   {
                        selectedRows.push(row.id);
                    }
                else
                   { 
                       console.log('unselect');
                       selectedRows=selectedRows.filter(item => item !== row.id);                                
                   }

                
                //this.setState ({ selectedRows:selectedRows });
                function updateSelectedRows(state, props) {
                    // Stop updates and re-renders if I've had enough pizzas.
                    state.selectedRows=selectedRows;
                    
                     return null;     
                  }
                  
                   this.setState(updateSelectedRows);
               // this.state.selectedRows=selectedRows;
                console.log("selectedrows :" + this.state.selectedRows);
              },
              onSelectAll: (isSelect, rows, e) => {
                console.log(isSelect);
                console.log(rows);
                console.log(e);
              }
        };

        return (
            <div>          

                <BootstrapTable 
                keyField='id' 
                data={this.props.data} 
                columns={this.props.columns}
                selectRow={selectRow}
                striped
                hover
                condensed
                bordered={ false }
               
                />
                <br />
            </div>
        );
    }
}

Grid.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array    
};

export default Grid;
