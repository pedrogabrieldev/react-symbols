import IconMoodFill0Wght100Grad0Opsz48 from '../components/MoodFill0Wght100Grad0Opsz48'
import IconMoodFill0Wght200Grad0Opsz48 from '../components/MoodFill0Wght200Grad0Opsz48'
import IconMoodFill0Wght300Grad0Opsz48 from '../components/MoodFill0Wght300Grad0Opsz48'
import IconMoodFill0Wght400Grad0Opsz48 from '../components/MoodFill0Wght400Grad0Opsz48'
import IconMoodFill0Wght500Grad0Opsz48 from '../components/MoodFill0Wght500Grad0Opsz48'
import IconMoodFill0Wght600Grad0Opsz48 from '../components/MoodFill0Wght600Grad0Opsz48'
import IconMoodFill0Wght700Grad0Opsz48 from '../components/MoodFill0Wght700Grad0Opsz48'
import IconMoodFill1Wght100Grad0Opsz48 from '../components/MoodFill1Wght100Grad0Opsz48'
import IconMoodFill1Wght200Grad0Opsz48 from '../components/MoodFill1Wght200Grad0Opsz48'
import IconMoodFill1Wght300Grad0Opsz48 from '../components/MoodFill1Wght300Grad0Opsz48'
import IconMoodFill1Wght400Grad0Opsz48 from '../components/MoodFill1Wght400Grad0Opsz48'
import IconMoodFill1Wght500Grad0Opsz48 from '../components/MoodFill1Wght500Grad0Opsz48'
import IconMoodFill1Wght600Grad0Opsz48 from '../components/MoodFill1Wght600Grad0Opsz48'
import IconMoodFill1Wght700Grad0Opsz48 from '../components/MoodFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMood = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMoodFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMoodFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMoodFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMoodFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMoodFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMoodFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMoodFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMoodFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMoodFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMoodFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMoodFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMoodFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMoodFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMoodFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
