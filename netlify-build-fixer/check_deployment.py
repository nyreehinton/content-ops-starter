#!/usr/bin/env python3
"""
Simple script to check Netlify deployment status
"""

import os
import sys
import subprocess
import json
from datetime import datetime

def check_netlify_deployment():
    """Check the status of the Netlify deployment"""
    print("Checking Netlify Deployment Status...")
    print("-" * 60)
    
    # Get site info
    try:
        site_info = subprocess.run(["netlify", "status"], 
                                  capture_output=True, text=True)
        print("Site Status:")
        print(site_info.stdout)
    except Exception as e:
        print(f"Error getting site status: {str(e)}")
    
    # Ping the site URL
    try:
        site_ping = subprocess.run(["curl", "-I", "https://nyreehinton.com"], 
                                  capture_output=True, text=True)
        print("\nSite Response:")
        status_line = site_ping.stdout.split('\n')[0]
        print(f"Status: {status_line}")
        
        if "200" in status_line:
            print("✅ Site is responding successfully!")
        else:
            print("⚠️ Site may have issues.")
    except Exception as e:
        print(f"Error pinging site: {str(e)}")
    
    print("\nDeployment Summary:")
    print(f"- Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("- Site URL: https://nyreehinton.com")
    print("- Admin URL: https://app.netlify.com/sites/nyreehinton")
    
    print("\nNext Steps:")
    print("1. Visit your site to verify all pages are working")
    print("2. Check for any console errors in the browser")
    print("3. Test all interactive features")
    
    print("-" * 60)
    print("Deployment check completed.")

if __name__ == "__main__":
    check_netlify_deployment() 