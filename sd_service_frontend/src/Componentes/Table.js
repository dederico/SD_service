import React from 'react'

import {Table} from 'reactstrap'

export default function TableD() {
  return (
    <div><Table
>
  <thead>
    <tr>
      <th>
        # Numero de Pedido
      </th>
      <th>
        Nombres
      </th>
      <th>
        Apellidos
      </th>
      <th>
        Correo
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        pedido_1
      </th>
      <td>
        Mark
      </td>
      <td>
        Otto
      </td>
      <td>
        mark@mdo.com
      </td>
    </tr>
    <tr>
      <th scope="row">
        pedido_2
      </th>
      <td>
        Jacob
      </td>
      <td>
        Thornton
      </td>
      <td>
        jacob@thornton.com
      </td>
    </tr>
    <tr>
      <th scope="row">
        pedido_3
      </th>
      <td>
        Larry
      </td>
      <td>
        the Bird
      </td>
      <td>
        Larry@thebird.com
      </td>
    </tr>
  </tbody>
</Table></div>
  )
}
