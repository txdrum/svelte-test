<script>
  import DataLoader from '../dataLoader.ts'

  const dl = new DataLoader()
  const data = dl.load()
  console.dir(data)
  const shops = data.shops
  console.dir(shops)
</script>

<div>
  <h2>Home</h2>
  <p>test</p>

  <table>
    <tr>
      <th>name</th>
      <th>link</th>
      <th>tags</th>
    </tr>

{#each shops as shop}
    <tr>
      <td>
        {shop.name}
      </td>
      <td>
        {shop.link}
      </td>
      <td>
        {shop.tags.join(', ')}
      </td>
    </tr>
{/each}
  </table>
</div>
