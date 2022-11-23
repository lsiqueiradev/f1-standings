import { apiInfomation } from './api'

export async function GetDriverInformation(driver: string) {
  try {
    const { data } = await apiInfomation.get(
      `/driver/info?driver=${driver.toLowerCase()}`,
    )
    return data
  } catch (err: any) {
    console.log('Error get driver information')
    throw Error(err)
  }
}

export async function GetTeamInformation(team: string) {
  try {
    const { data } = await apiInfomation.get(`/team/info?team=${team}`)
    return data
  } catch (err: any) {
    console.log('Error get team information')
    throw Error(err)
  }
}

export async function GetCircuitInformation(country: string) {
  try {
    const { data } = await apiInfomation.get(`/circuit/info?country=${country}`)
    return data
  } catch (err: any) {
    console.log('Error get circuit information')
    throw Error(err)
  }
}
