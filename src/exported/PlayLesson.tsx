import IconPlayLessonFill0Wght100Grad0Opsz48 from '../components/PlayLessonFill0Wght100Grad0Opsz48'
import IconPlayLessonFill0Wght200Grad0Opsz48 from '../components/PlayLessonFill0Wght200Grad0Opsz48'
import IconPlayLessonFill0Wght300Grad0Opsz48 from '../components/PlayLessonFill0Wght300Grad0Opsz48'
import IconPlayLessonFill0Wght400Grad0Opsz48 from '../components/PlayLessonFill0Wght400Grad0Opsz48'
import IconPlayLessonFill0Wght500Grad0Opsz48 from '../components/PlayLessonFill0Wght500Grad0Opsz48'
import IconPlayLessonFill0Wght600Grad0Opsz48 from '../components/PlayLessonFill0Wght600Grad0Opsz48'
import IconPlayLessonFill0Wght700Grad0Opsz48 from '../components/PlayLessonFill0Wght700Grad0Opsz48'
import IconPlayLessonFill1Wght100Grad0Opsz48 from '../components/PlayLessonFill1Wght100Grad0Opsz48'
import IconPlayLessonFill1Wght200Grad0Opsz48 from '../components/PlayLessonFill1Wght200Grad0Opsz48'
import IconPlayLessonFill1Wght300Grad0Opsz48 from '../components/PlayLessonFill1Wght300Grad0Opsz48'
import IconPlayLessonFill1Wght400Grad0Opsz48 from '../components/PlayLessonFill1Wght400Grad0Opsz48'
import IconPlayLessonFill1Wght500Grad0Opsz48 from '../components/PlayLessonFill1Wght500Grad0Opsz48'
import IconPlayLessonFill1Wght600Grad0Opsz48 from '../components/PlayLessonFill1Wght600Grad0Opsz48'
import IconPlayLessonFill1Wght700Grad0Opsz48 from '../components/PlayLessonFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPlayLesson = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPlayLessonFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPlayLessonFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPlayLessonFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPlayLessonFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPlayLessonFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPlayLessonFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPlayLessonFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPlayLessonFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPlayLessonFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPlayLessonFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPlayLessonFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPlayLessonFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPlayLessonFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPlayLessonFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
