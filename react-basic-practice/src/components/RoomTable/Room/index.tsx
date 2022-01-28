import { AiFillDelete } from 'react-icons/ai';

export const Room = () => {
  return (
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>
        <button type="button" className="btn btn-outline-danger">
          <AiFillDelete />
        </button>
      </td>
    </tr>
  );
};
