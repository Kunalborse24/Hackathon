function Blog({ Id,Title,Category,Action}) {
    return (
      <tr>
        <td>{Id}</td>
        <td>{Title}</td>
        <td>{Category}</td>
       
        <td>{Action}</td>
        
      </tr>
    )
  }
  
  export default Blog