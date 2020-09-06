const formatDate = (value: string): string =>
  // new Intl.DateTimeFormat('pt-BR', {
  //   year: 'numeric',
  //   month: 'long',
  //   day: '2-digit',
  // }).format(new Date(transaction.created_at))

  new Date(value).toLocaleDateString();

export default formatDate;
