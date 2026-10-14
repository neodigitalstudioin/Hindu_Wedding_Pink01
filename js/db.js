/**
 * Resilient RSVP Storage for Wedding Invitation
 */

window.NeoDB = (function () {
  'use strict';

  const RSVPS_KEY = 'wedding_invitation_rsvps';

  function sanitize(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  return {
    init: function () {
      // no-op initialization
    },

    submitRSVP: function (payload) {
      const cleanName = sanitize(payload.name).trim();
      const cleanMsg = sanitize(payload.message).trim();
      const status = payload.status === 'declined' ? 'declined' : 'accepted';

      if (!cleanName) {
        return { success: false, error: 'Please enter your name.' };
      }

      let allRSVPs = [];
      try {
        allRSVPs = JSON.parse(localStorage.getItem(RSVPS_KEY)) || [];
      } catch (e) {
        allRSVPs = [];
      }

      const newRecord = {
        id: 'rsvp-' + Date.now(),
        guestName: cleanName,
        status: status,
        message: cleanMsg,
        createdAt: new Date().toISOString()
      };

      allRSVPs.unshift(newRecord);
      localStorage.setItem(RSVPS_KEY, JSON.stringify(allRSVPs));
      return { success: true, data: newRecord };
    },

    getAllRSVPs: function () {
      try {
        return JSON.parse(localStorage.getItem(RSVPS_KEY)) || [];
      } catch (e) {
        return [];
      }
    }
  };
})();
