import { Avatar } from '@components/atoms/Avatar/Avatar'
import Link from 'next/link'
import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react'


export const VendorContractTable = () => {

  const getMuiTheme = () => createMuiTheme({
    overrides: {
        MuiTableHead: {
            root: {
                backgroundColor: "#c1e1ec"
            }
        }
    }
});


  const columns = ['Name', 'Company', 'City', 'State']

  const data = [
    ['Joe James', 'Test Corp', 'Yonkers', 'NY'],
    ['John Walsh', 'Test Corp', 'Hartford', 'CT'],
    ['Bob Herm', 'Test Corp', 'Tampa', 'FL'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
  ]

  const options = {
    filterType: 'checkbox',
  }

  return (
    <div className="w-full h-full">
      <MUIDataTable
        title={'Employee List'}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  )
}
