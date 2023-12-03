# Question

- A l'étape 26, à l'intérieur des crochets de `@Get` pourquoi est-ce que la route doit être `:uuid` et pas `uuid`. Qeulle différence entre avec et sans deux points

- Réexpliquer le `this.usersService.getByUUID(uuid)` ou `this.prisma.users.findUnique`

- Expliquer ce que signifie le `UUID : uuid`.
- Pourquoi retourner undefined ?
``` ts
public async updateByUUID(uuid: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.prisma.users.update({
      where: {
        UUID: uuid,
      },
      data: {
        Pseudo: !!updateUserDto.pseudo ? updateUserDto.pseudo : undefined,
        Mail: !!updateUserDto.mail ? updateUserDto.mail : undefined,
      },
    });
    return updatedUser;
  }
```