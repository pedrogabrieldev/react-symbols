import IconBugReportFill0Wght100Grad0Opsz48 from '../components/BugReportFill0Wght100Grad0Opsz48'
import IconBugReportFill0Wght200Grad0Opsz48 from '../components/BugReportFill0Wght200Grad0Opsz48'
import IconBugReportFill0Wght300Grad0Opsz48 from '../components/BugReportFill0Wght300Grad0Opsz48'
import IconBugReportFill0Wght400Grad0Opsz48 from '../components/BugReportFill0Wght400Grad0Opsz48'
import IconBugReportFill0Wght500Grad0Opsz48 from '../components/BugReportFill0Wght500Grad0Opsz48'
import IconBugReportFill0Wght600Grad0Opsz48 from '../components/BugReportFill0Wght600Grad0Opsz48'
import IconBugReportFill0Wght700Grad0Opsz48 from '../components/BugReportFill0Wght700Grad0Opsz48'
import IconBugReportFill1Wght100Grad0Opsz48 from '../components/BugReportFill1Wght100Grad0Opsz48'
import IconBugReportFill1Wght200Grad0Opsz48 from '../components/BugReportFill1Wght200Grad0Opsz48'
import IconBugReportFill1Wght300Grad0Opsz48 from '../components/BugReportFill1Wght300Grad0Opsz48'
import IconBugReportFill1Wght400Grad0Opsz48 from '../components/BugReportFill1Wght400Grad0Opsz48'
import IconBugReportFill1Wght500Grad0Opsz48 from '../components/BugReportFill1Wght500Grad0Opsz48'
import IconBugReportFill1Wght600Grad0Opsz48 from '../components/BugReportFill1Wght600Grad0Opsz48'
import IconBugReportFill1Wght700Grad0Opsz48 from '../components/BugReportFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBugReport = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBugReportFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBugReportFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBugReportFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBugReportFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBugReportFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBugReportFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBugReportFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBugReportFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBugReportFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBugReportFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBugReportFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBugReportFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBugReportFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBugReportFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
