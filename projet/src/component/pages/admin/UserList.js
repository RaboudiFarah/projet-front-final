import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";



export default function UserList() {
  
 
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
     
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "Gender",
      headerName: "Gender",
      width: 200,
     
    },
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
    
      renderCell: (params) => {
        return (
          <div>
            
              <button className="userListEdit">Active</button>
              
              
           
          </div>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
    
      renderCell: (params) => {
        return (
          <div>
            
             
              
              <button class="delete">
              <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
            </button>
           
          </div>
        );
      },
    },
    {
      field: "Edit",
      headerName: "Edit",
      width: 150,
    
      renderCell: (params) => {
        return (
          <div>
            
             
              
          <button onClick ={() => alert('gjgju')} className="userListEdit">Edit</button>
           
          </div>
        );
      },
    },
  ];
  const rows = [
    { id: 1, user: 'farah',email: 'farah@gmail.com', Gender: 'parent'},
    { id: 1, user: 'farah',email: 'farah@gmail.com', Gender: 'parent' },
    { id: 1, user: 'farah',email: 'farah@gmail.com', Gender:'parent' },
  ];
  
  return (
   
      <div className="userList">
        <DataGrid
          rows={rows}
          
          columns={columns}
          pageSize={10}
          checkboxSelection
        />
      </div>
  );
}