struct UserAccount {
  1: string email
  2: optional string name
}

service UserAccountService {
  list<UserAccount> getAccounts()

  void insertAccounts(1: UserAccount userAccount)
}