import IconPrayerTimesFill0Wght100Grad0Opsz48 from '../components/PrayerTimesFill0Wght100Grad0Opsz48'
import IconPrayerTimesFill0Wght200Grad0Opsz48 from '../components/PrayerTimesFill0Wght200Grad0Opsz48'
import IconPrayerTimesFill0Wght300Grad0Opsz48 from '../components/PrayerTimesFill0Wght300Grad0Opsz48'
import IconPrayerTimesFill0Wght400Grad0Opsz48 from '../components/PrayerTimesFill0Wght400Grad0Opsz48'
import IconPrayerTimesFill0Wght500Grad0Opsz48 from '../components/PrayerTimesFill0Wght500Grad0Opsz48'
import IconPrayerTimesFill0Wght600Grad0Opsz48 from '../components/PrayerTimesFill0Wght600Grad0Opsz48'
import IconPrayerTimesFill0Wght700Grad0Opsz48 from '../components/PrayerTimesFill0Wght700Grad0Opsz48'
import IconPrayerTimesFill1Wght100Grad0Opsz48 from '../components/PrayerTimesFill1Wght100Grad0Opsz48'
import IconPrayerTimesFill1Wght200Grad0Opsz48 from '../components/PrayerTimesFill1Wght200Grad0Opsz48'
import IconPrayerTimesFill1Wght300Grad0Opsz48 from '../components/PrayerTimesFill1Wght300Grad0Opsz48'
import IconPrayerTimesFill1Wght400Grad0Opsz48 from '../components/PrayerTimesFill1Wght400Grad0Opsz48'
import IconPrayerTimesFill1Wght500Grad0Opsz48 from '../components/PrayerTimesFill1Wght500Grad0Opsz48'
import IconPrayerTimesFill1Wght600Grad0Opsz48 from '../components/PrayerTimesFill1Wght600Grad0Opsz48'
import IconPrayerTimesFill1Wght700Grad0Opsz48 from '../components/PrayerTimesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPrayerTimes = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPrayerTimesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPrayerTimesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPrayerTimesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPrayerTimesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPrayerTimesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPrayerTimesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPrayerTimesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPrayerTimesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPrayerTimesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPrayerTimesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPrayerTimesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPrayerTimesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPrayerTimesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPrayerTimesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
