import { chain } from './middlewares/chain';
import { withAuthorization } from './middlewares/withAuthorization';
import { withHeaders } from './middlewares/withHeaders';
import { withLogging } from './middlewares/withLogging';

const middlewares = [withAuthorization, withLogging, withHeaders];

export default chain(middlewares);
