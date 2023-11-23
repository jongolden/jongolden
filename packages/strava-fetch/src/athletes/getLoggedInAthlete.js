import queryStrava from '../queryStrava';

/**
 * Get Authenticated Athlete (getLoggedInAthlete)
 * Returns the currently authenticated athlete. Tokens with profile:read_all
 * scope will receive a detailed athlete representation; all others will receive
 * a summary representation.
 */
function getLoggedInAthlete() {
  return queryStrava({ path: '/athlete' });
}

export default getLoggedInAthlete;
