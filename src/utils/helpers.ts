export const getTeamColors: any = {
  alfa: '#B12039',
  alphatauri: '#4E7C9B',
  alpine: '#2293D1',
  aston_martin: '#2D826D',
  ferrari: '#ED1C24',
  haas: '#B6BABD',
  mclaren: '#F58020',
  mercedes: '#6CD3BF',
  red_bull: '#1E5BC6',
  williams: '#37BEDD',
}

export const getCircuitInformationsNames: any = {
  bahrain: 'Bahrain',
  jeddah: 'Saudi_Arabia',
  albert_park: 'Australia',
  imola: 'EmiliaRomagna',
  miami: 'Miami',
  catalunya: 'Spain',
  monaco: 'Monaco',
  baku: 'Azerbaijan',
  villeneuve: 'Canada',
  silverstone: 'Great_Britain',
  red_bull_ring: 'Austria',
  ricard: 'France',
  hungaroring: 'Hungary',
  spa: 'Belgium',
  zandvoort: 'Netherlands',
  monza: 'Italy',
  marina_bay: 'Singapore',
  suzuka: 'Japan',
  americas: 'United_States',
  rodriguez: 'Mexico',
  interlagos: 'Brazil',
  yas_marina: 'United_Arab_Emirates',
}

export const getRaceTypeNames: any = {
  results: 'Race',
  qualifying: 'Qualification',
  sprint: 'Sprint',
}

interface formattedDriversNameArrayProps {
  givenName: string
  familyName: string
}

export function formattedDriversNameArray(
  drivers: formattedDriversNameArrayProps[],
) {
  let names = ''
  drivers.forEach((driver: formattedDriversNameArrayProps, index: number) => {
    if (index === drivers.length - 1) {
      names += driver.givenName.charAt(0) + '. ' + driver.familyName
    } else {
      names += driver.givenName.charAt(0) + '. ' + driver.familyName + ' | '
    }
  })
  return names
}
