import IconMoodBadFill0Wght100Grad0Opsz48 from '../components/MoodBadFill0Wght100Grad0Opsz48'
import IconMoodBadFill0Wght200Grad0Opsz48 from '../components/MoodBadFill0Wght200Grad0Opsz48'
import IconMoodBadFill0Wght300Grad0Opsz48 from '../components/MoodBadFill0Wght300Grad0Opsz48'
import IconMoodBadFill0Wght400Grad0Opsz48 from '../components/MoodBadFill0Wght400Grad0Opsz48'
import IconMoodBadFill0Wght500Grad0Opsz48 from '../components/MoodBadFill0Wght500Grad0Opsz48'
import IconMoodBadFill0Wght600Grad0Opsz48 from '../components/MoodBadFill0Wght600Grad0Opsz48'
import IconMoodBadFill0Wght700Grad0Opsz48 from '../components/MoodBadFill0Wght700Grad0Opsz48'
import IconMoodBadFill1Wght100Grad0Opsz48 from '../components/MoodBadFill1Wght100Grad0Opsz48'
import IconMoodBadFill1Wght200Grad0Opsz48 from '../components/MoodBadFill1Wght200Grad0Opsz48'
import IconMoodBadFill1Wght300Grad0Opsz48 from '../components/MoodBadFill1Wght300Grad0Opsz48'
import IconMoodBadFill1Wght400Grad0Opsz48 from '../components/MoodBadFill1Wght400Grad0Opsz48'
import IconMoodBadFill1Wght500Grad0Opsz48 from '../components/MoodBadFill1Wght500Grad0Opsz48'
import IconMoodBadFill1Wght600Grad0Opsz48 from '../components/MoodBadFill1Wght600Grad0Opsz48'
import IconMoodBadFill1Wght700Grad0Opsz48 from '../components/MoodBadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMoodBad = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMoodBadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMoodBadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMoodBadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMoodBadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMoodBadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMoodBadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMoodBadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMoodBadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMoodBadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMoodBadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMoodBadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMoodBadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMoodBadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMoodBadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
