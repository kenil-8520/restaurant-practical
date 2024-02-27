import jwt, {JwtPayload} from 'jsonwebtoken';

interface User {
    email: string;
    id: string;
}

const generateAccessToken = (user: User): string => {
    const token = jwt.sign(
        {
            user: {
                email: user.email,
                id: user.id,
            },
        },
        process.env.JWT_SECRET as string,
        { expiresIn: "15h" }
    );
    return token
};

export const decodeToken = (token:string) => {
    try {
      let tokenWithoutBearer = token.split(' ')[1];
      let decodedToken: JwtPayload | null = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET as string) as JwtPayload;
      return decodedToken
    } catch (error) {
      return null;
    }
  }


export { generateAccessToken };
