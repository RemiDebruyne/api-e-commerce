# Question

- A l'étape 26, à l'intérieur des crochets de `@Get` pourquoi est-ce que la route doit être `:uuid` et pas `uuid`. Quelle différence entre avec et sans deux points

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
- Etape 30, pourquoi l'import de `NormalizedResponse` n'est pas enter bracket

- C'est quoi InestApplication

- Pourquoi swagger est set-up différement de l'explication de la doc (avec une function plutot qu'une const, avec INest application et avec swaggerModule.CreateDocument à l'intérieur de SwaggerModule.setup et pas l'un après l'autre)