import type { TeamData, TeamId } from './types';

const teams: { [key in TeamId]: TeamData } = {
  '100_thieves': {
    name: '100 Thieves',
    league: 'Americas',
    region: 'NA',
    color: {
      primary: '#ea3031'
    }
  },
  'bilibili': {
    name: 'Bilibili Gaming',
    league: 'China',
    region: 'China',
    color: {
      primary: '#34cff3',
      secondary: '#fa7298'
    },
    icon: {
      height: '48px',
      width: '72px'
    }
  },
  'cloud9': {
    name: 'Cloud9',
    league: 'Americas',
    region: 'NA',
    color: {
      primary: '#00aeef'
    }
  },
  'drx': {
    name: 'DRX',
    league: 'Pacific',
    region: 'Korea',
    color: {
      primary: '#1003a2'
    }
  },
  'edward_gaming': {
    name: 'EDward Gaming',
    league: 'China',
    region: 'China',
    color: {
      primary: '#ec3737'
    }
  },
  'evil_geniuses': {
    name: 'Evil Geniuses',
    league: 'Americas',
    region: 'NA',
    color: {
      primary: '#000429',
      secondary: '#35dd8e',
      background: 'white'
    }
  },
  'fnatic': {
    name: 'Fnatic',
    league: 'EMEA',
    region: 'Europe',
    color: {
      primary: '#ff5800'
    }
  },
  'fpx': {
    name: 'FunPlus Pheonix',
    league: 'China',
    region: 'China',
    color: {
      primary: '#fa0f00'
    },
    icon: {
      height: '48px',
      width: '72px'
    }
  },
  'fut': {
    name: 'Fut Esports',
    league: 'EMEA',
    region: 'Europe',
    color: {
      primary: '#121824',
      secondary: '#ec1a39',
      background: 'white'
    }
  },
  'giants': {
    name: 'Giants',
    league: 'EMEA',
    region: 'Europe',
    color: {
      primary: '#438ed9'
    }
  },
  'kru': {
    name: 'KRÜ Esports',
    league: 'Americas',
    region: 'LATAM South',
    color: {
      primary: '#ff198f'
    }
  },
  'loud': {
    name: 'Loud',
    league: 'Americas',
    region: 'Brazil',
    color: {
      primary: '#13ff00'
    }
  },
  'navi': {
    name: 'Natus Vincere',
    league: 'EMEA',
    region: 'Europe',
    color: {
      primary: '#ffee00'
    }
  },
  'nrg': {
    name: 'NRG',
    league: 'Americas',
    region: 'NA',
    color: {
      primary: '#dddddd',
      background: '#333'
    },
    icon: {
      height: '48px',
      width: '72px'
    }
  },
  'paper_rex': {
    name: 'Paper Rex',
    league: 'Pacific',
    region: 'Asia Pacific',
    color: {
      primary: '#e4ff00'
    }
  },
  'sentinels': {
    name: 'Sentinels',
    league: 'Americas',
    region: 'NA',
    color: {
      primary: '#ce0037'
    }
  },
  't1': {
    name: 'T1',
    league: 'Pacific',
    region: 'Korea',
    color: {
      primary: '#e2012d'
    },
    icon: {
      height: '48px',
      width: '72px'
    }
  },
  'team_liquid': {
    name: 'Team Liquid',
    league: 'EMEA',
    region: 'Europe',
    color: {
      primary: '#001538',
      secondary: '#BBAD41',
      background: 'white'
    }
  },
  'zeta_division': {
    name: 'Zeta Division',
    league: 'Pacific',
    region: 'Japan',
    color: {
      primary: '#cdff00'
    }
  }
}

export default teams