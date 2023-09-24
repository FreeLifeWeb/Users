import { Query, User, requestUsers } from '../api';

export const loadUsers = async (
    query: Query,
    setUsers: React.Dispatch<React.SetStateAction<User[]>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    currentPage: number,
    itemsPerPage: number
) => {
    setIsLoading(true);
    try {
        const data = await requestUsers({
            ...query,
            limit: itemsPerPage,
            offset: (currentPage - 1) * itemsPerPage,
        });
        if (data.length === 0) {
            setError('Users not found');
        } else {
            setUsers(data);
        }
    } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError('An error occurred');
        }
    } finally {
        setIsLoading(false);
    }
};
