import UserGrid from "../components/UserGrid"

const UsersPage = () => {
  return (
    <main className="max-w-6xl mx-auto">
      <p className="text-lg font-semibold bg-white rounded-lg shadow-lg flex items-center justify-center text-black p-2">Users List</p>
      <UserGrid/>
    </main>
  )
}

export default UsersPage